// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CDNTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the trigger event. For more information, see [CDN events](https://help.aliyun.com/document_detail/2513636.html).
   * 
   * @example
   * CdnDomainStarted
   */
  eventName?: string;
  /**
   * @remarks
   * The version of the trigger event. Only the 1.0.0 event version is supported.
   * 
   * @example
   * 1.0.0
   */
  eventVersion?: string;
  /**
   * @remarks
   * The details of the event filtering rules.
   */
  filter?: { [key: string]: string[] };
  /**
   * @remarks
   * The description of the trigger.
   */
  notes?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'eventName',
      eventVersion: 'eventVersion',
      filter: 'filter',
      notes: 'notes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventVersion: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      notes: 'string',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

