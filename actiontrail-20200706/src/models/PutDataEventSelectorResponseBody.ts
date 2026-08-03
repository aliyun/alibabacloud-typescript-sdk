// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDataEventSelectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the data event selector. This parameter is a JSON array that can contain a maximum of 20 elements.
   * 
   * Each element in the JSON array includes the following fields:
   * 
   * - `ServiceName`: The name of the Alibaba Cloud service that supports data events.
   * 
   * - `ReadWriteType`: The type of data event. Valid values: Read, Write, and All.
   * 
   * - `EventName`: This field contains the `Equals` and `NotEquals` subfields.
   * 
   *   For example, the following configuration specifies that only `GetObject`, `CopyObject`, and `AppendObject` events are delivered:
   * 
   *   `{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]}}`
   * 
   *   If you specify `NotEquals`, events other than `GetObject`, `CopyObject`, and `AppendObject` are delivered.
   * 
   * - `ResourceArn`: This field also contains the `Equals` and `NotEquals` subfields, similar to `EventName`. For example:
   * 
   *   `{"ResourceArn":{"Equals":[arn1,...,arnx]}}`
   * 
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  dataEventSelectors?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 243E1250-32DA-493B-9347-3C7EEE07****
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the trail.
   * 
   * @example
   * acs:actiontrail:cn-shanghai:159498693826****:trail/trail-name
   */
  trailArn?: string;
  static names(): { [key: string]: string } {
    return {
      dataEventSelectors: 'DataEventSelectors',
      requestId: 'RequestId',
      trailArn: 'TrailArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEventSelectors: 'string',
      requestId: 'string',
      trailArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

