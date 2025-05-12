// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobResponseBodySnapshotJobInput extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the object.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The region in which the OSS bucket resides.
   * 
   * @example
   * example-location\\"
   */
  location?: string;
  /**
   * @remarks
   * The OSS object that is used as the input file.
   * 
   * @example
   * example.flv
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

