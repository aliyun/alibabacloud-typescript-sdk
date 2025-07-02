// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CDNTriggerConfig extends $dara.Model {
  /**
   * @example
   * CdnDomainStarted
   */
  eventName?: string;
  /**
   * @example
   * 1.0.0
   */
  eventVersion?: string;
  filter?: { [key: string]: string[] };
  /**
   * @example
   * 缓存事件触发器
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

