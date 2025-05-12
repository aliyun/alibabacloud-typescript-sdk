// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the output file.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the region in which the output OSS bucket is located.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The OSS object that is generated as the output file of the tiling job.
   * 
   * @example
   * example.png
   */
  object?: string;
  /**
   * @remarks
   * The ARN of the specified RAM role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * acs:ram::1:role/testrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

