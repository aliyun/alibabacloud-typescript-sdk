// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotwordLibrariesResponseBodyHotwordLibraryList extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and uses UTC time (ending with Z).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description. The maximum length is 200 characters.
   * 
   * @example
   * Hotword library for celebrities
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
   * The modification time. The time is in ISO 8601 format and uses UTC time (ending with Z).
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
   * The scenarios of the hotword library. Valid values:
   * - ASR: ASR intelligent text recognition.
   * - StructuredMediaAssets: Structured media assets.
   * - VideoTranslation: Video translation.
   * Once a hotword library is created, this field cannot be modified.
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
   * The list of hotword libraries.
   */
  hotwordLibraryList?: ListHotwordLibrariesResponseBodyHotwordLibraryList[];
  /**
   * @remarks
   * The maximum number of hotword library information records returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The position to which the current call has read. An empty value indicates that all data has been read.
   * 
   * @example
   * CBB6BC61D08
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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

