// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCustomCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * temp/ImportCustomCallTagging.xlsx
   */
  filePath?: string;
  /**
   * @remarks
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

