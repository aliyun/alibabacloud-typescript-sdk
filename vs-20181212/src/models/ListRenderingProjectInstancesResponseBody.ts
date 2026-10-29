// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo extends $dara.Model {
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * In a session
   */
  comment?: string;
  /**
   * @remarks
   * The project instance status.
   * 
   * @example
   * InUse
   */
  state?: string;
  /**
   * @remarks
   * The latest update time of the status. The time is in the ISO 8601 standard and includes a time zone offset. The format is YYYY-MM-DDTHH:mm:ss+HH:mm.
   * 
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
   * @remarks
   * The association time. The time is in the ISO 8601 standard and includes a time zone offset. The format is YYYY-MM-DDTHH:mm:ss+HH:mm.
   * 
   * @example
   * 2024-09-11T18:19:04+08:00
   */
  associationTime?: string;
  /**
   * @remarks
   * The ID of the cloud application service instance.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The project instance status information.
   */
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
  /**
   * @remarks
   * The list of cloud application service instances.
   */
  renderingInstances?: ListRenderingProjectInstancesResponseBodyRenderingInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud application service instances.
   * 
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

