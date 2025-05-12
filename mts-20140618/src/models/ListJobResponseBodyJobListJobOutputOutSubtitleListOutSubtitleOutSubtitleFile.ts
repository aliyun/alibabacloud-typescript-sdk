// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region in which the output file is stored.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the output file.
   * 
   * @example
   * example-output.flv
   */
  object?: string;
  /**
   * @remarks
   * The ARN of the RAM role used for delegated authorization.
   * 
   * @example
   * acs:ram::<your uid>:role/<your role name>
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

