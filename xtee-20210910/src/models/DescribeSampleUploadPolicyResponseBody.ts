// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleUploadPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * OSS access key ID.
   * 
   * @example
   * LTAxxxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * OSS domain name.
   * 
   * @example
   * emseu.cxy8uoq4aafx.eu-central-1.rds.amazonaws.com
   */
  host?: string;
  /**
   * @remarks
   * The key of OSS upload policy.
   * 
   * @example
   * saf/de/namelist/e924/ufzgsedX9bd3a7
   */
  key?: string;
  /**
   * @remarks
   * OSS upload policy.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wNy0zMFQwNjowNTo0OS45NTRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJlcSIsIiRrZXkiLCJzYWZcL2RlXC9uYW1lbGlzdFwvZTkyNFwvdWZ6Z3NlZFg5Ymxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Signature information.
   * 
   * @example
   * 3Es5j/9Xm/zwPcM9cwEr5pa0Wsc=
   */
  signature?: string;
  /**
   * @remarks
   * Temporary identity credential.
   * 
   * @example
   * tT44bMQxxxxxxxxxxxxxxx
   */
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      stsToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

