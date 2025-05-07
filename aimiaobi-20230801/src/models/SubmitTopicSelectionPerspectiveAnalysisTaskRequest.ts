// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments } from "./SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments";


export class SubmitTopicSelectionPerspectiveAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documents?: SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments[];
  /**
   * @example
   * TimedViewPoints
   */
  perspectiveTypes?: string[];
  /**
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      perspectiveTypes: 'PerspectiveTypes',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments },
      perspectiveTypes: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    if(Array.isArray(this.perspectiveTypes)) {
      $dara.Model.validateArray(this.perspectiveTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

