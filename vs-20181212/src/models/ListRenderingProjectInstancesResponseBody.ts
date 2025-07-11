// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo extends $dara.Model {
  comment?: string;
  /**
   * @example
   * InUse
   */
  state?: string;
  /**
   * @example
   * 2024-11-11T18:19:04+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      state: 'State',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      state: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingProjectInstancesResponseBodyRenderingInstances extends $dara.Model {
  /**
   * @example
   * 2024-09-11T18:19:04+08:00
   */
  associationTime?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  stateInfo?: ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo;
  static names(): { [key: string]: string } {
    return {
      associationTime: 'AssociationTime',
      renderingInstanceId: 'RenderingInstanceId',
      stateInfo: 'StateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationTime: 'string',
      renderingInstanceId: 'string',
      stateInfo: ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo,
    };
  }

  validate() {
    if(this.stateInfo && typeof (this.stateInfo as any).validate === 'function') {
      (this.stateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingProjectInstancesResponseBody extends $dara.Model {
  renderingInstances?: ListRenderingProjectInstancesResponseBodyRenderingInstances[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      renderingInstances: 'RenderingInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstances: { 'type': 'array', 'itemType': ListRenderingProjectInstancesResponseBodyRenderingInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.renderingInstances)) {
      $dara.Model.validateArray(this.renderingInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

