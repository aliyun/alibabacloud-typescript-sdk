// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebAccessModeResponseBodyDomainModes } from "./DescribeWebAccessModeResponseBodyDomainModes";


export class DescribeWebAccessModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the modes in which the website service is added.
   */
  domainModes?: DescribeWebAccessModeResponseBodyDomainModes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainModes: 'DomainModes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainModes: { 'type': 'array', 'itemType': DescribeWebAccessModeResponseBodyDomainModes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainModes)) {
      $dara.Model.validateArray(this.domainModes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

