// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateModelRequestContentRequestParametersBuild } from "./CreateModelRequestContentRequestParametersBuild";
import { CreateModelRequestContentRequestParametersSearch } from "./CreateModelRequestContentRequestParametersSearch";


export class CreateModelRequestContentRequestParameters extends $dara.Model {
  build?: CreateModelRequestContentRequestParametersBuild;
  search?: CreateModelRequestContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: CreateModelRequestContentRequestParametersBuild,
      search: CreateModelRequestContentRequestParametersSearch,
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

