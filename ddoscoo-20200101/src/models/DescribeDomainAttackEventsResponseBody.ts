// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainAttackEventsResponseBodyDomainAttackEvents } from "./DescribeDomainAttackEventsResponseBodyDomainAttackEvents";


export class DescribeDomainAttackEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the DDoS attack event.
   */
  domainAttackEvents?: DescribeDomainAttackEventsResponseBodyDomainAttackEvents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned DDoS attack events.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainAttackEvents: 'DomainAttackEvents',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAttackEvents: { 'type': 'array', 'itemType': DescribeDomainAttackEventsResponseBodyDomainAttackEvents },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainAttackEvents)) {
      $dara.Model.validateArray(this.domainAttackEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

