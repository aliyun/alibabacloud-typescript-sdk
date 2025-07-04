// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyModelRequestContentRequestParametersBuild } from "./ModifyModelRequestContentRequestParametersBuild";
import { ModifyModelRequestContentRequestParametersSearch } from "./ModifyModelRequestContentRequestParametersSearch";


export class ModifyModelRequestContentRequestParameters extends $dara.Model {
  build?: ModifyModelRequestContentRequestParametersBuild;
  search?: ModifyModelRequestContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: ModifyModelRequestContentRequestParametersBuild,
      search: ModifyModelRequestContentRequestParametersSearch,
    };
  }

  validate() {
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

