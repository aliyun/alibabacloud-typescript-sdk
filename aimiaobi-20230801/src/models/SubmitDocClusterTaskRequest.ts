// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitDocClusterTaskRequestDocuments } from "./SubmitDocClusterTaskRequestDocuments";


export class SubmitDocClusterTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  documents?: SubmitDocClusterTaskRequestDocuments[];
  /**
   * @example
   * 49
   */
  summaryLength?: number;
  /**
   * @example
   * 69
   */
  titleLength?: number;
  /**
   * @example
   * 15
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      summaryLength: 'SummaryLength',
      titleLength: 'TitleLength',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitDocClusterTaskRequestDocuments },
      summaryLength: 'number',
      titleLength: 'number',
      topicCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

