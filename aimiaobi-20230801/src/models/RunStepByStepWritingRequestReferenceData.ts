// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStepByStepWritingRequestReferenceDataArticles } from "./RunStepByStepWritingRequestReferenceDataArticles";
import { RunStepByStepWritingRequestReferenceDataOutlines } from "./RunStepByStepWritingRequestReferenceDataOutlines";


export class RunStepByStepWritingRequestReferenceData extends $dara.Model {
  articles?: RunStepByStepWritingRequestReferenceDataArticles[];
  miniDoc?: string[];
  outlines?: RunStepByStepWritingRequestReferenceDataOutlines[];
  summarization?: string[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      miniDoc: 'MiniDoc',
      outlines: 'Outlines',
      summarization: 'Summarization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataArticles },
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      outlines: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataOutlines },
      summarization: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.miniDoc)) {
      $dara.Model.validateArray(this.miniDoc);
    }
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    if(Array.isArray(this.summarization)) {
      $dara.Model.validateArray(this.summarization);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

