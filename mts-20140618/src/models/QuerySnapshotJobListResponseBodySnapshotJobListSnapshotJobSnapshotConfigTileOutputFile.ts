// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the job fails. This parameter is not returned if the job is successfully processed.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The error message returned when the job fails. This parameter is not returned if the job is successfully processed.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The ID of the message. This parameter is not returned if the job fails.
   * 
   * @example
   * example.png
   */
  object?: string;
  /**
   * @remarks
   * The message sent by MNS to notify the user of the job result.
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

