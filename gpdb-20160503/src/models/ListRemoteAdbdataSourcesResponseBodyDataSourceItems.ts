// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRemoteADBDataSourcesResponseBodyDataSourceItemsRemoteDataSources } from "./ListRemoteAdbdataSourcesResponseBodyDataSourceItemsRemoteDataSources";


export class ListRemoteADBDataSourcesResponseBodyDataSourceItems extends $dara.Model {
  remoteDataSources?: ListRemoteADBDataSourcesResponseBodyDataSourceItemsRemoteDataSources[];
  static names(): { [key: string]: string } {
    return {
      remoteDataSources: 'RemoteDataSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteDataSources: { 'type': 'array', 'itemType': ListRemoteADBDataSourcesResponseBodyDataSourceItemsRemoteDataSources },
    };
  }

  validate() {
    if(Array.isArray(this.remoteDataSources)) {
      $dara.Model.validateArray(this.remoteDataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

