// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops } from "./DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops";


export class DescribeFotaPendingDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The cloud computers whose images can be and are pending to be updated to the version specified in `TaskUid`.
   */
  fotaPendingDesktops?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fotaPendingDesktops: 'FotaPendingDesktops',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fotaPendingDesktops: { 'type': 'array', 'itemType': DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fotaPendingDesktops)) {
      $dara.Model.validateArray(this.fotaPendingDesktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

