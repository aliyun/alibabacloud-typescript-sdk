// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingRequestSourceSourceOSSParameters extends $dara.Model {
  /**
   * @example
   * bucket_abc
   */
  bucketName?: string;
  /**
   * @example
   * \\n
   */
  delimiter?: string;
  /**
   * @example
   * TextLoader
   */
  loadFormat?: string;
  /**
   * @example
   * single
   */
  loadMode?: string;
  /**
   * @example
   * fun/document/
   */
  prefix?: string;
  /**
   * @example
   * eventbridge_oss_role
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      delimiter: 'Delimiter',
      loadFormat: 'LoadFormat',
      loadMode: 'LoadMode',
      prefix: 'Prefix',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      delimiter: 'string',
      loadFormat: 'string',
      loadMode: 'string',
      prefix: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

