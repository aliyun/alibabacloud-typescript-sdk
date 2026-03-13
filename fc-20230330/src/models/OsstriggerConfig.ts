// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Filter } from "./Filter";


export class OSSTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The list of events. Enter an event related to OSS. For more information about event types,see [OSS events](https://help.aliyun.com/document_detail/2513613.html).
   */
  events?: string[];
  /**
   * @remarks
   * The event filtering rule.
   */
  filter?: Filter;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      filter: Filter,
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

