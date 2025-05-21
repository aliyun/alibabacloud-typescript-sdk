// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyList extends $dara.Model {
  /**
   * @example
   * 840016700254633984
   */
  agentId?: string;
  agentName?: string;
  /**
   * @example
   * text
   */
  agentScene?: string;
  charactersDescription?: string;
  /**
   * @example
   * 1
   */
  enableInteraction?: number;
  /**
   * @example
   * Car
   */
  industry?: string;
  /**
   * @example
   * true
   */
  onlineSearch?: boolean;
  /**
   * @example
   * SYSTEM
   */
  owner?: string;
  /**
   * @example
   * http
   * ;//www.abc.com/111.mp4
   */
  referenceUrl?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * RED_BOOK
   */
  textStyle?: string;
  /**
   * @example
   * Seller
   */
  viewer?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      agentScene: 'agentScene',
      charactersDescription: 'charactersDescription',
      enableInteraction: 'enableInteraction',
      industry: 'industry',
      onlineSearch: 'onlineSearch',
      owner: 'owner',
      referenceUrl: 'referenceUrl',
      status: 'status',
      textStyle: 'textStyle',
      viewer: 'viewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      agentScene: 'string',
      charactersDescription: 'string',
      enableInteraction: 'number',
      industry: 'string',
      onlineSearch: 'boolean',
      owner: 'string',
      referenceUrl: 'string',
      status: 'number',
      textStyle: 'string',
      viewer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

