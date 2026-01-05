// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentResponseBodyTemplate extends $dara.Model {
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

export class DescribeComponentResponseBody extends $dara.Model {
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
  /**
   * @example
   * ---\\n# Source: dataset-accelerator/templates/dataset-accelerator\\napiVersion: data.datasetacc.io/v1\\nkind: DataSetAccelerator\\nmetadata:\\n  name: dataset-accelerator\\nspec:\\n  frontEndAddr: 10.0.0.2\\n  frontEndPort: 7001\\n
   */
  renderedContent?: string;
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  template?: DescribeComponentResponseBodyTemplate;
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
      renderedContent: 'RenderedContent',
      requestId: 'RequestId',
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
      renderedContent: 'string',
      requestId: 'string',
      template: DescribeComponentResponseBodyTemplate,
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

