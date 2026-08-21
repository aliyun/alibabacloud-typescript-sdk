// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVodTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
   * 
   * - The name can be up to 128 bytes in length.
   * - The name must be encoded in UTF-8.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the snapshot template in JSON format. For more information about the parameter structure, see [SnapshotTemplateConfig](https://help.aliyun.com/document_detail/98618.html).
   * 
   * @example
   * {"SnapshotConfig":{"Count":10,"SpecifiedOffsetTime":0,"Interval":1}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the snapshot template.
   * 
   * This parameter is required.
   * 
   * @example
   * 8c75a02e339b*****0b0d2c48171a22
   */
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: 'string',
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

