// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpacesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace.
   * 
   * @example
   * test-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The maximum number of results.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * pEL20OGYeZQez8NdW7ve
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Filters only active AgentSpaces in the current region. Multiple conditions use the AND operator, and keys must be unique. Omitting the value matches the existence of the key, and an empty character string is an exact match for an empty value. An empty array is equivalent to not using label filtering and retains the original cross-region resources.
   * 
   * @example
   * [{\\"key\\": \\"env\\", \\"value\\": \\"test\\"}]
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

