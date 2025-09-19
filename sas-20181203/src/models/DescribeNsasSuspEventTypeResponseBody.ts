// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNsasSuspEventTypeResponseBodyEventTypes extends $dara.Model {
  /**
   * @remarks
   * The name of the alert type.
   * 
   * @example
   * Unusual Logon
   */
  name?: string;
  /**
   * @remarks
   * The number of assets for which an alert of the type is generated.
   * 
   * @example
   * 22
   */
  suspEventCount?: number;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * Unusual Logon
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      suspEventCount: 'SuspEventCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      suspEventCount: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNsasSuspEventTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about the alert type.
   */
  eventTypes?: DescribeNsasSuspEventTypeResponseBodyEventTypes[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9FBC6E47-7508-58C9-9E76-528E118CB1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: { 'type': 'array', 'itemType': DescribeNsasSuspEventTypeResponseBodyEventTypes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

