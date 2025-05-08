// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBodyApplicationsApplicationAppListApp } from "./ListApplicationsResponseBodyApplicationsApplicationAppListApp";


export class ListApplicationsResponseBodyApplicationsApplicationAppList extends $dara.Model {
  app?: ListApplicationsResponseBodyApplicationsApplicationAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationAppListApp },
    };
  }

  validate() {
    if(Array.isArray(this.app)) {
      $dara.Model.validateArray(this.app);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

