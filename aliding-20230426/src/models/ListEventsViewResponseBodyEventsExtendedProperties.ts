// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties } from "./ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties";


export class ListEventsViewResponseBodyEventsExtendedProperties extends $dara.Model {
  sharedProperties?: ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties;
  static names(): { [key: string]: string } {
    return {
      sharedProperties: 'SharedProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedProperties: ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties,
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

