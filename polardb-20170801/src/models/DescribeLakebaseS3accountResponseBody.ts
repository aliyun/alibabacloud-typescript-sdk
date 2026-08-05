// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakebaseS3AccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The Access Key of the S3 account.
   * 
   * @example
   * accname
   */
  userAccAk?: string;
  /**
   * @remarks
   * The policy document of the S3 account.
   * 
   * @example
   * {"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["s3:*"],"Resource":["*"]}]}
   */
  userAccPolicy?: string;
  /**
   * @remarks
   * The Secret Key of the S3 account (masked).
   * 
   * @example
   * password***
   */
  userAccSk?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userAccAk: 'UserAccAk',
      userAccPolicy: 'UserAccPolicy',
      userAccSk: 'UserAccSk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userAccAk: 'string',
      userAccPolicy: 'string',
      userAccSk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

