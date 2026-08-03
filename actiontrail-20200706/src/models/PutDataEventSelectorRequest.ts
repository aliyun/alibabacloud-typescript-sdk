// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDataEventSelectorRequest extends $dara.Model {
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
   *   For example, the following configuration specifies that only `GetObject`, `CopyObject`, and `AppendObject`events are delivered:
   * 
   *   `{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]}}`
   * 
   *   If you specify `NotEquals`, events other than `GetObject`, `CopyObject`, and `AppendObject` are delivered.
   * 
   * - `ResourceArn`: This field also contains the `Equals` and `NotEquals` subfields, similar to `EventName`. For example:
   * 
   *   `{"ResourceArn":{"Equals":[arn1,...,arnx]}}`
   * 
   * This parameter is required.
   * 
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  eventSelectors?: string;
  /**
   * @remarks
   * Specifies whether the trail tracks data events in all regions.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  isTrailAllRegion?: boolean;
  /**
   * @remarks
   * The name of the trail.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  /**
   * @remarks
   * The regions where the trail tracks data events. Separate multiple region IDs with a comma (`,`).
   * 
   * @example
   * cn-shanghai,cn-hangzhou
   */
  trailRegionIds?: string;
  static names(): { [key: string]: string } {
    return {
      eventSelectors: 'EventSelectors',
      isTrailAllRegion: 'IsTrailAllRegion',
      trailName: 'TrailName',
      trailRegionIds: 'TrailRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSelectors: 'string',
      isTrailAllRegion: 'boolean',
      trailName: 'string',
      trailRegionIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

