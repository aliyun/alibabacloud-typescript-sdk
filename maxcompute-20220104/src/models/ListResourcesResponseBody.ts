// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyDataResources extends $dara.Model {
  comment?: string;
  contentMD5?: string;
  creationTime?: number;
  displayName?: string;
  lastModifiedTime?: number;
  lastUpdator?: string;
  name?: string;
  owner?: string;
  schema?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      contentMD5: 'contentMD5',
      creationTime: 'creationTime',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      lastUpdator: 'lastUpdator',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentMD5: 'string',
      creationTime: 'number',
      displayName: 'string',
      lastModifiedTime: 'number',
      lastUpdator: 'string',
      name: 'string',
      owner: 'string',
      schema: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyData extends $dara.Model {
  marker?: string;
  maxItem?: number;
  resources?: ListResourcesResponseBodyDataResources[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyDataResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
  data?: ListResourcesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

