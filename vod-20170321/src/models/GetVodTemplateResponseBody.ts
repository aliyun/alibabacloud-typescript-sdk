// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodTemplateResponseBodyVodTemplateInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-30T08:05:59:57Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the template is the default one. Valid values:
   * 
   * *   **Default**: The template is the default one.
   * *   **NotDefault**: The template is not the default one.
   * 
   * @example
   * NotDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * The time when the template was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-30T09:05:59:57Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The detailed configurations of the template. The value is a JSON-formatted string. For more information about the data structure, see the "SnapshotTemplateConfig" section of the [Media processing parameters](https://help.aliyun.com/document_detail/98618.html) topic.
   * 
   * @example
   * {\\"SnapshotConfig\\":{\\"Count\\":10,\\"SpecifiedOffsetTime\\":0,\\"Interval\\":1},\\"SnapshotType\\":\\"NormalSnapshot\\"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * *   **Snapshot**
   * *   **DynamicImage**
   * 
   * @example
   * Snapshot
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 7c49f2f4c09*****69fcd446690
   */
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      modifyTime: 'ModifyTime',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateType: 'TemplateType',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      modifyTime: 'string',
      name: 'string',
      templateConfig: 'string',
      templateType: 'string',
      vodTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE7A1F49-41C1-47*****DF-4CD0C02087DB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshot template.
   */
  vodTemplateInfo?: GetVodTemplateResponseBodyVodTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateInfo: 'VodTemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateInfo: GetVodTemplateResponseBodyVodTemplateInfo,
    };
  }

  validate() {
    if(this.vodTemplateInfo && typeof (this.vodTemplateInfo as any).validate === 'function') {
      (this.vodTemplateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

