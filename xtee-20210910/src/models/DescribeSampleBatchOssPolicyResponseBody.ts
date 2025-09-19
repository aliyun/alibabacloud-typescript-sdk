// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleBatchOssPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * OSS Access ID
   * 
   * @example
   * LTAxxxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * OSS Domain
   * 
   * @example
   * 172.25.126.234
   */
  host?: string;
  /**
   * @remarks
   * Key required for file upload.
   * 
   * @example
   * saf/de/namelist/e924/ufzgsedX9bd3a7
   */
  key?: string;
  /**
   * @remarks
   * OSS Security Policy
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wNy0zMFQwNjowNTo0OS45NTRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJlcSIsIiRrZXkiLCJzYWZcL2RlXC9uYW1lbGlzdFwvZTkyNFwvdWZ6Z3NlZFg5Ymxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * OSS Signature
   * 
   * @example
   * PoAUQ//RusJJFIvCrn36O3+mM/U=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

