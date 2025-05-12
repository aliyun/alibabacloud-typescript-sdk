// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the output caption is stored.
   * 
   * @example
   * exampleBucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the output caption resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the output caption.
   * 
   * @example
   * example.flv
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

