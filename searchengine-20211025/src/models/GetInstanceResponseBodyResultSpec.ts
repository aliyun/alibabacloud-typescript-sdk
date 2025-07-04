// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceResponseBodyResultSpecQrsResource } from "./GetInstanceResponseBodyResultSpecQrsResource";
import { GetInstanceResponseBodyResultSpecSearchResource } from "./GetInstanceResponseBodyResultSpecSearchResource";


export class GetInstanceResponseBodyResultSpec extends $dara.Model {
  /**
   * @remarks
   * The QRS worker specifications.
   */
  qrsResource?: GetInstanceResponseBodyResultSpecQrsResource;
  /**
   * @remarks
   * The searcher worker specifications.
   */
  searchResource?: GetInstanceResponseBodyResultSpecSearchResource;
  static names(): { [key: string]: string } {
    return {
      qrsResource: 'qrsResource',
      searchResource: 'searchResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrsResource: GetInstanceResponseBodyResultSpecQrsResource,
      searchResource: GetInstanceResponseBodyResultSpecSearchResource,
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

