// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBodyApplicationsApplication } from "./ListApplicationsResponseBodyApplicationsApplication";


export class ListApplicationsResponseBodyApplications extends $dara.Model {
  application?: ListApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
    };
  }

  validate() {
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

