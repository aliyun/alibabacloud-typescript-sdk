// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCustomCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * The ObjectKey of the OSS object that contains the inbound number mark file. OSS is configured with the public customer storage bucket for Cloud Call Center. You can upload the inbound number mark file to this public customer storage bucket through the inbound management page of Cloud Call Center. After the upload succeeds, invoking this API reads the file content from OSS and imports it in batch. We do not recommend directly invoking this API. Instead, you can perform this operation through the default public cloud CRM System provided by Cloud Call Center.
   * 
   * This parameter is required.
   * 
   * @example
   * temp/ImportCustomCallTagging.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

