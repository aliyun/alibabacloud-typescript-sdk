// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetModelResponseBodyResultContentRequestParametersBuild } from "./GetModelResponseBodyResultContentRequestParametersBuild";
import { GetModelResponseBodyResultContentRequestParametersSearch } from "./GetModelResponseBodyResultContentRequestParametersSearch";


export class GetModelResponseBodyResultContentRequestParameters extends $dara.Model {
  build?: GetModelResponseBodyResultContentRequestParametersBuild;
  search?: GetModelResponseBodyResultContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: GetModelResponseBodyResultContentRequestParametersBuild,
      search: GetModelResponseBodyResultContentRequestParametersSearch,
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

