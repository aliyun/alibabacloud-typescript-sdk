// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaseFileUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The file name of the predictive outbound calling Activity list. The name must consist of uppercase and lowercase English letters, and the file format must be CSV.
   * 
   * This parameter is required.
   * 
   * @example
   * case.csv
   */
  fileName?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
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

