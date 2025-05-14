// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventsResponseBodyEventsExtendedPropertiesSharedProperties } from "./ListEventsResponseBodyEventsExtendedPropertiesSharedProperties";


export class ListEventsResponseBodyEventsExtendedProperties extends $dara.Model {
  sharedProperties?: ListEventsResponseBodyEventsExtendedPropertiesSharedProperties;
  static names(): { [key: string]: string } {
    return {
      sharedProperties: 'SharedProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedProperties: ListEventsResponseBodyEventsExtendedPropertiesSharedProperties,
    };
  }

  validate() {
    if(this.sharedProperties && typeof (this.sharedProperties as any).validate === 'function') {
      (this.sharedProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

