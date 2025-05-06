// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList } from "./GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList";


export class GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   */
  configurationList?: GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList[];
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
   * The token that is used to initiate the next request.
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
      configurationList: { 'type': 'array', 'itemType': GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList },
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

