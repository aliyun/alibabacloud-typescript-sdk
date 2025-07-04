// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyResultSpecQrsResource } from "./ListInstancesResponseBodyResultSpecQrsResource";
import { ListInstancesResponseBodyResultSpecSearchResource } from "./ListInstancesResponseBodyResultSpecSearchResource";


export class ListInstancesResponseBodyResultSpec extends $dara.Model {
  qrsResource?: ListInstancesResponseBodyResultSpecQrsResource;
  searchResource?: ListInstancesResponseBodyResultSpecSearchResource;
  static names(): { [key: string]: string } {
    return {
      qrsResource: 'qrsResource',
      searchResource: 'searchResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrsResource: ListInstancesResponseBodyResultSpecQrsResource,
      searchResource: ListInstancesResponseBodyResultSpecSearchResource,
    };
  }

  validate() {
    if(this.qrsResource && typeof (this.qrsResource as any).validate === 'function') {
      (this.qrsResource as any).validate();
    }
    if(this.searchResource && typeof (this.searchResource as any).validate === 'function') {
      (this.searchResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

