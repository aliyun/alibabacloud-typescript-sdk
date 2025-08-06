// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVodTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**. For more information, see [Multi-application service](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * *   The name cannot exceed 128 bytes.
   * *   The value must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the snapshot template. The value must be a JSON string. For more information about the data structure, see [SnapshotTemplateConfig](https://help.aliyun.com/document_detail/98618.html) and [DynamicImageTemplateConfig](https://help.aliyun.com/document_detail/98618.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"SnapshotConfig":{"Count":10,"SpecifiedOffsetTime":0,"Interval":1,"FrameType":"normal"},"SnapshotType":"NormalSnapshot"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The type of the template. Set the value to **Snapshot**.
   * 
   * This parameter is required.
   * 
   * @example
   * Snapshot
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      templateConfig: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

