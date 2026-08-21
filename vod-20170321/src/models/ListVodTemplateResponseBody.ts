// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodTemplateResponseBodyVodTemplateInfoList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the template was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-11-30T08:05:59:57Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the template is the default template. Valid values:
   * 
   * - **Default**: The template is the default template.
   * - **NotDefault**: The template is not the default template.
   * 
   * @example
   * NotDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * The time when the template was last modified. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-11-30T09:05:59:97Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The detailed template configuration in JSON format. For more information about the data structure, see [SnapshotTemplateConfig](https://help.aliyun.com/document_detail/98618.html).
   * 
   * @example
   * {\\"SnapshotConfig\\":{\\"Count\\":10,\\"SpecifiedOffsetTime\\":0,\\"Interval\\":1},\\"SnapshotType\\":\\"NormalSnapshot\\"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * 
   * - **Snapshot**: snapshot.
   * - **DynamicImage**: animated image.
   * 
   * @example
   * Snapshot
   */
  templateType?: string;
  /**
   * @remarks
   * The template ID.
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
   * The request ID.
   * 
   * @example
   * 2A56B75B-B7E6-48*****27-A9BEAA3E50A8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of snapshot template data.
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

