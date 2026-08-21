// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodTemplateResponseBodyVodTemplateInfo extends $dara.Model {
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
   * - **Default**
   * - **NotDefault**
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
   * 2018-11-30T09:05:59:57Z
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
   * The detailed template configuration, in JSON format. For more information about the data structure, see [SnapshotTemplateConfig](https://help.aliyun.com/document_detail/98618.html).
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
   * The request ID.
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

