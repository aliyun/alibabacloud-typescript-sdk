// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaQualityAnalysisJobVqaScoreDetail } from "./MediaQualityAnalysisJobVqaScoreDetail";


export class MediaQualityAnalysisJobVqaResultScoreResultBlock extends $dara.Model {
  intensityValue?: number;
  perceptualScore?: number;
  static names(): { [key: string]: string } {
    return {
      intensityValue: 'IntensityValue',
      perceptualScore: 'PerceptualScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intensityValue: 'number',
      perceptualScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaQualityAnalysisJobVqaResultScoreResultColor extends $dara.Model {
  intensityValue?: number;
  perceptualScore?: number;
  static names(): { [key: string]: string } {
    return {
      intensityValue: 'IntensityValue',
      perceptualScore: 'PerceptualScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intensityValue: 'number',
      perceptualScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaQualityAnalysisJobVqaResultScoreResultDetail extends $dara.Model {
  intensityValue?: number;
  perceptualScore?: number;
  static names(): { [key: string]: string } {
    return {
      intensityValue: 'IntensityValue',
      perceptualScore: 'PerceptualScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intensityValue: 'number',
      perceptualScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaQualityAnalysisJobVqaResultScoreResultNoise extends $dara.Model {
  intensityValue?: number;
  perceptualScore?: number;
  static names(): { [key: string]: string } {
    return {
      intensityValue: 'IntensityValue',
      perceptualScore: 'PerceptualScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intensityValue: 'number',
      perceptualScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaQualityAnalysisJobVqaResultScoreResultSharp extends $dara.Model {
  intensityValue?: number;
  perceptualScore?: number;
  static names(): { [key: string]: string } {
    return {
      intensityValue: 'IntensityValue',
      perceptualScore: 'PerceptualScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intensityValue: 'number',
      perceptualScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaQualityAnalysisJobVqaResultScoreResult extends $dara.Model {
  block?: MediaQualityAnalysisJobVqaResultScoreResultBlock;
  color?: MediaQualityAnalysisJobVqaResultScoreResultColor;
  detail?: MediaQualityAnalysisJobVqaResultScoreResultDetail;
  noise?: MediaQualityAnalysisJobVqaResultScoreResultNoise;
  sharp?: MediaQualityAnalysisJobVqaResultScoreResultSharp;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      color: 'Color',
      detail: 'Detail',
      noise: 'Noise',
      sharp: 'Sharp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: MediaQualityAnalysisJobVqaResultScoreResultBlock,
      color: MediaQualityAnalysisJobVqaResultScoreResultColor,
      detail: MediaQualityAnalysisJobVqaResultScoreResultDetail,
      noise: MediaQualityAnalysisJobVqaResultScoreResultNoise,
      sharp: MediaQualityAnalysisJobVqaResultScoreResultSharp,
    };
  }

  validate() {
    if(this.block && typeof (this.block as any).validate === 'function') {
      (this.block as any).validate();
    }
    if(this.color && typeof (this.color as any).validate === 'function') {
      (this.color as any).validate();
    }
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(this.noise && typeof (this.noise as any).validate === 'function') {
      (this.noise as any).validate();
    }
    if(this.sharp && typeof (this.sharp as any).validate === 'function') {
      (this.sharp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaQualityAnalysisJobVqaResult extends $dara.Model {
  block?: MediaQualityAnalysisJobVqaScoreDetail;
  color?: MediaQualityAnalysisJobVqaScoreDetail;
  detail?: MediaQualityAnalysisJobVqaScoreDetail;
  noise?: MediaQualityAnalysisJobVqaScoreDetail;
  scoreResult?: MediaQualityAnalysisJobVqaResultScoreResult;
  sharp?: MediaQualityAnalysisJobVqaScoreDetail;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      color: 'Color',
      detail: 'Detail',
      noise: 'Noise',
      scoreResult: 'ScoreResult',
      sharp: 'Sharp',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: MediaQualityAnalysisJobVqaScoreDetail,
      color: MediaQualityAnalysisJobVqaScoreDetail,
      detail: MediaQualityAnalysisJobVqaScoreDetail,
      noise: MediaQualityAnalysisJobVqaScoreDetail,
      scoreResult: MediaQualityAnalysisJobVqaResultScoreResult,
      sharp: MediaQualityAnalysisJobVqaScoreDetail,
      state: 'string',
    };
  }

  validate() {
    if(this.block && typeof (this.block as any).validate === 'function') {
      (this.block as any).validate();
    }
    if(this.color && typeof (this.color as any).validate === 'function') {
      (this.color as any).validate();
    }
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(this.noise && typeof (this.noise as any).validate === 'function') {
      (this.noise as any).validate();
    }
    if(this.scoreResult && typeof (this.scoreResult as any).validate === 'function') {
      (this.scoreResult as any).validate();
    }
    if(this.sharp && typeof (this.sharp as any).validate === 'function') {
      (this.sharp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

