// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsResponseBodyComponentsTemplate extends $dara.Model {
  /**
   * @example
   * OSS
   */
  type?: string;
  /**
   * @example
   * data/VOCdevkit/VOC2007/ImageSets/Main/val.txt
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponents extends $dara.Model {
  /**
   * @example
   * 2014-10-02T15:01:23Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2014-10-02T15:01:23Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * dataset-accelerator
   */
  name?: string;
  /**
   * @example
   * 1557702098194904
   */
  ownerId?: string;
  template?: ListComponentsResponseBodyComponentsTemplate;
  /**
   * @example
   * 276065346797410278
   */
  userId?: string;
  /**
   * @example
   * cmpt-5zk866779me51jgu3w
   */
  uuid?: string;
  /**
   * @example
   * v1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      ownerId: 'OwnerId',
      template: 'Template',
      userId: 'UserId',
      uuid: 'Uuid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      ownerId: 'string',
      template: ListComponentsResponseBodyComponentsTemplate,
      userId: 'string',
      uuid: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $dara.Model {
  components?: ListComponentsResponseBodyComponents[];
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponents },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

