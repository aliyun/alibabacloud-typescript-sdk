// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventResponseBodyExtendedPropertiesSharedProperties } from "./GetEventResponseBodyExtendedPropertiesSharedProperties";


export class GetEventResponseBodyExtendedProperties extends $dara.Model {
  sharedProperties?: GetEventResponseBodyExtendedPropertiesSharedProperties;
  static names(): { [key: string]: string } {
    return {
      sharedProperties: 'SharedProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedProperties: GetEventResponseBodyExtendedPropertiesSharedProperties,
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

