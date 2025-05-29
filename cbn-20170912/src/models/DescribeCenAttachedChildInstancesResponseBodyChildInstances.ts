// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance } from "./DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance";


export class DescribeCenAttachedChildInstancesResponseBodyChildInstances extends $dara.Model {
  childInstance?: DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance[];
  static names(): { [key: string]: string } {
    return {
      childInstance: 'ChildInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstance: { 'type': 'array', 'itemType': DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance },
    };
  }

  validate() {
    if(Array.isArray(this.childInstance)) {
      $dara.Model.validateArray(this.childInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

