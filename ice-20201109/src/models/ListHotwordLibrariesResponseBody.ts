// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotwordLibrariesResponseBodyHotwordLibraryList extends $dara.Model {
  /**
   * @remarks
   * The time when the hotword library was created.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the hotword library. It can be up to 200 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the hotword library.
   * 
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  hotwordLibraryId?: string;
  /**
   * @remarks
   * The time when the hotword library was last modified.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the hotword library.
   * 
   * @example
   * my_hotwords
   */
  name?: string;
  /**
   * @remarks
   * The usage scenario of the hotword library. Valid values:
   * 
   * *   ASR: Automatic Speech Recognition
   * *   StructuredMediaAssets: structured media analysis
   * *   VideoTranslation: Video translation This field cannot be modified after the hotword library is created.
   * 
   * @example
   * ASR
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      hotwordLibraryId: 'HotwordLibraryId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      hotwordLibraryId: 'string',
      modifiedTime: 'string',
      name: 'string',
      usageScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotwordLibrariesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hotword libraries.
   */
  hotwordLibraryList?: ListHotwordLibrariesResponseBodyHotwordLibraryList[];
  /**
   * @remarks
   * The maximum number of hotword libraries that can be returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token that can be used in the next request to retrieve a new page of results. If it is empty, all results are returned.
   * 
   * @example
   * CBB6BC61D08
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****9262E3DA-07FA-4862-FCBB6BC61D08*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of hotword libraries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hotwordLibraryList: 'HotwordLibraryList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotwordLibraryList: { 'type': 'array', 'itemType': ListHotwordLibrariesResponseBodyHotwordLibraryList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotwordLibraryList)) {
      $dara.Model.validateArray(this.hotwordLibraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

