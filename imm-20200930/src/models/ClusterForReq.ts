// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ClusterForReqCoverFigures extends $dara.Model {
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterForReqCover extends $dara.Model {
  figures?: ClusterForReqCoverFigures[];
  static names(): { [key: string]: string } {
    return {
      figures: 'Figures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figures: { 'type': 'array', 'itemType': ClusterForReqCoverFigures },
    };
  }

  validate() {
    if(Array.isArray(this.figures)) {
      $dara.Model.validateArray(this.figures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterForReq extends $dara.Model {
  cover?: ClusterForReqCover;
  customId?: string;
  customLabels?: { [key: string]: any };
  name?: string;
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      name: 'Name',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: ClusterForReqCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      objectId: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

