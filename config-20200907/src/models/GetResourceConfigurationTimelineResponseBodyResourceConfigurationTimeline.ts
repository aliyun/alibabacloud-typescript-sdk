// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList } from "./GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList";


export class GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline extends $dara.Model {
  /**
   * @remarks
   * The configuration changes on the configuration timeline.
   */
  configurationList?: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList[];
  /**
   * @remarks
   * The maximum number of entries returned for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configurationList: 'ConfigurationList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationList: { 'type': 'array', 'itemType': GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configurationList)) {
      $dara.Model.validateArray(this.configurationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

