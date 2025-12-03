// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileBlobsRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * src/Test.java
   */
  filePath?: string;
  /**
   * @example
   * 10
   */
  from?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * master  / tag1.0 /  ecykhdd
   */
  ref?: string;
  /**
   * @example
   * 10
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      filePath: 'filePath',
      from: 'from',
      organizationId: 'organizationId',
      ref: 'ref',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      filePath: 'string',
      from: 'number',
      organizationId: 'string',
      ref: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

