// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput extends $dara.Model {
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the snapshot job was submitted.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The error code returned when the job fails. This parameter is not returned if the job is successfully processed.
   * 
   * @example
   * example.flv
   */
  object?: string;
  /**
   * @remarks
   * The custom data.
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

