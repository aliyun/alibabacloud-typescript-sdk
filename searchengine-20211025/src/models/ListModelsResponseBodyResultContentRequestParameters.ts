// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelsResponseBodyResultContentRequestParametersBuild } from "./ListModelsResponseBodyResultContentRequestParametersBuild";
import { ListModelsResponseBodyResultContentRequestParametersSearch } from "./ListModelsResponseBodyResultContentRequestParametersSearch";


export class ListModelsResponseBodyResultContentRequestParameters extends $dara.Model {
  build?: ListModelsResponseBodyResultContentRequestParametersBuild;
  search?: ListModelsResponseBodyResultContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: ListModelsResponseBodyResultContentRequestParametersBuild,
      search: ListModelsResponseBodyResultContentRequestParametersSearch,
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

