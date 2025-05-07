// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationConfigResponseBodyDataOssMountDescs extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The directory or object in OSS. If the specified directory or object does not exist, an error is returned.
   * 
   * @example
   * data/user.data
   */
  bucketPath?: string;
  /**
   * @remarks
   * The path of the container in SAE. The parameter value that you specified overwrites the original value. If the specified path does not exist, SAE automatically creates the path.
   * 
   * @example
   * /usr/data/user.data
   */
  mountPath?: string;
  /**
   * @remarks
   * Indicates whether the application can use the container path to read data from or write data to resources in the directory of the OSS bucket. Valid values:
   * 
   * *   **true**: The application has the read-only permissions.
   * *   **false**: The application has the read and write permissions.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      mountPath: 'mountPath',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountPath: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

