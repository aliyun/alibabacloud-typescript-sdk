// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodTemplateResponseBodyVodTemplateInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
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
   * 2018-11-30T09:05:59:97Z
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
   * 7c49f2f42b1c*****0969fcd446690
   */
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      appId: 'string',
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

export class ListVodTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2A56B75B-B7E6-48*****27-A9BEAA3E50A8
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot templates.
   */
  vodTemplateInfoList?: ListVodTemplateResponseBodyVodTemplateInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateInfoList: 'VodTemplateInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateInfoList: { 'type': 'array', 'itemType': ListVodTemplateResponseBodyVodTemplateInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.vodTemplateInfoList)) {
      $dara.Model.validateArray(this.vodTemplateInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

